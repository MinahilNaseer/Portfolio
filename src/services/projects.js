import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export const getProjects = async () => {
  const projectsCollection = collection(db, 'projects');
  const snapshot = await getDocs(projectsCollection);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};