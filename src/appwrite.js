
import { Client, Databases, ID,Query ,Storage} from "appwrite";
const DATABASE_ID=import.meta.env.VITE_APPWRITE_DATABASE_ID
const PROJECT_ID=import.meta.env.VITE_APPWRITE_PROJECT_ID
const MEAL_COLLECTION_ID = import.meta.env.VITE_APPWRITE_MEAL_COLLECTION_ID;
const CATEGORY_COLLECTION_ID = import.meta.env.VITE_APPWRITE_CATEGORY_COLLECTION_ID;
const BUCKET_ID= import.meta.env.VITE_APPWRITE_BUCKET_ID

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

  const databases=new Databases(client)
  const storage=new Storage(client)


  const getMeals=async()=>{
    try {
        const result= await databases.listDocuments(
            DATABASE_ID,
            MEAL_COLLECTION_ID,
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
  const getCategories = async () => {
    try {
      const result = await databases.listDocuments(
        DATABASE_ID,
        CATEGORY_COLLECTION_ID,
        []
      );
      return result.documents;
    } catch (error) {
      console.log(error);
      console.error("Error fetching categories:", error.message, error);
      alert("Error: " + error.message);
    }
  };
  const getImageURL = (fileId) => {
    
    return `https://fra.cloud.appwrite.io/v1/storage/buckets/6868c2150015b704d545/files/${fileId}/view?project=6867f23d0004bcfea4f5&mode=admin `
  };
export {getCategories, getMeals,getImageURL}