<template>
  <nav>
    <div>
      <p>Hey there...</p>
      <p class="email">Currently logged in as...</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "@/composables/useLogout";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const { logOut, error } = useLogout();
    const router = useRouter()
    const handleLogout = async () => {
      await logOut();
      if(!error.value){
        console.log('user log out')
      }
      router.push({name:'welcome'})
    };

    return { handleLogout, error };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
