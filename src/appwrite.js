
import { Client, Databases, ID,Query } from "appwrite";
const DATABASE_ID=import.meta.env.VITE_APPWRITE_DATABASE_ID
const PROJECT_ID=import.meta.env.VITE_APPWRITE_PROJECT_ID
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

  const databases=new Databases(client)


  export const getMeals=async()=>{
    try {
        const result= await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                

            ]
        )
        return result.documents
        

    } catch (error) {
        console.log(error)
        console.error("Error fetching meals:", error.message, error);
        alert("Error: "+error.message);
    }
  }
export default getMeals