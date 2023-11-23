import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection) => {
  const error = ref(null);

  const addDoc = async (doc) => {
      error.value = null;

    try {
       await projectFirestore
        .collection(collection)
        .add(doc);

      error.value = null;
    } catch (error) {
      console.log(error);
      error.value = 'coud not send the message'
    }
  };

  return { error , addDoc}
};

export default useCollection;
