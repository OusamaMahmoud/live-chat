<template>
  <nav v-if="user">
    <div>
      <p>Hey there... {{ user.displayName }}</p>
      <p class="email">Currently logged in as...{{ user.email }}</p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "@/composables/useLogout";
import getUser from "@/composables/useUser";

export default {
  setup() {
    const { logOut, error } = useLogout();
    const { user } = getUser();

    const handleLogout = async () => {
      await logOut();
      if (!error.value) {
        console.log("user log out");
      }
    };

    return { handleLogout, error, user };
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
