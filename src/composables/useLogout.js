import { projectAuth } from "@/firebase/config";
import {ref} from "vue";
const error = ref(null);

const logOut = async () => {
  error.value = null;
  try {
    const res = await projectAuth.signOut();
    error.value = null;
  } catch (error) {
    console.log(error);
    error.value = error;
  }
};

const useLogout = () => {
  return { logOut, error };
};

export default useLogout;