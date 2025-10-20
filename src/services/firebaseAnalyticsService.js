import { collection, addDoc, getDocs, doc, setDoc, writeBatch } from 'firebase/firestore';
import { db } from '../firebase/config';
import { analyticsProjectsData } from '../data/analyticsProjectsData';

export const uploadAnalyticsProjectsToFirebase = async () => {
  try {
    const projectsCollection = collection(db, 'dataanalytics');
    
    // Check if projects already exist
    const existingProjects = await getDocs(projectsCollection);
    
    if (existingProjects.size > 0) {
      console.log('Analytics projects already exist in Firebase. Skipping upload.');
      return { success: true, message: 'Projects already exist' };
    }

    // Use batch write for better performance - NOW CORRECTLY IMPORTED
    const batch = writeBatch(db);
    
    analyticsProjectsData.forEach((project) => {
      const projectData = {
        ...project,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const projectRef = doc(projectsCollection, project.id);
      batch.set(projectRef, projectData);
    });

    await batch.commit();
    console.log('All analytics projects uploaded successfully!');
    return { success: true, message: 'All projects uploaded successfully' };
    
  } catch (error) {
    console.error('Error uploading analytics projects:', error);
    
    // More specific error handling
    if (error.code === 'permission-denied') {
      console.error('Firestore permission denied. Check security rules.');
      return { 
        success: false, 
        message: 'Permission denied. Please check Firestore security rules.' 
      };
    }
    
    return { 
      success: false, 
      message: error.message,
      code: error.code 
    };
  }
};

// Function to get all analytics projects from Firebase
export const getAnalyticsProjectsFromFirebase = async () => {
  try {
    const projectsCollection = collection(db, 'dataanalytics');
    const projectsSnapshot = await getDocs(projectsCollection);
    const projects = projectsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Sort by displayOrder
    return projects.sort((a, b) => a.displayOrder - b.displayOrder);
  } catch (error) {
    console.error('Error fetching analytics projects:', error);
    return [];
  }
};


// Function to initialize analytics projects (call this once)
export const initializeAnalyticsProjects = async () => {
  return await uploadAnalyticsProjectsToFirebase();
};