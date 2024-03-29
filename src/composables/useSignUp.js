import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);
const signUp = async (email, password, displayName) => {
 
    error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!res) {
      throw new Error("coudnt complete sign up");
    }
    await res.user.updateProfile({displayName});

    error.value = null;
   
    return res;

  } catch (err) {
    console.log(err);
    error.value = err.message
  }
};

const useSingUp = () => {
  return { error, signUp };
};

export default useSingUp;
