import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const signIn = async (email, password) => {
  error.value = null;

  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);

    if (!res) {
      throw new Error("coudnt complete sign up");
    }

    error.value = null;

    return res;
  } catch (err) {
    console.log(err);
    error.value = "opps ! sorry login failed ";
  }
};

const useLogIn = () => {
  return { error, signIn };
};

export default useLogIn;
