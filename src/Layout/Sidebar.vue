<template>
  <v-navigation-drawer
    permanent
    app
  >
    <img src="../../assets/Horizontal-Logo-Sidebar.png" alt="Sew Handy By Alaina" class="logo">
    <img src="../../assets/Mini-Ribbon.png" alt="ribbon" class="ribbon">
    <v-flex column>
      <!-- <ul>
        <li v-for="(link, index) in links" :key="index" @click="activate(index)">
          <router-link v-for="link in links" :key="link.name" :to="link.route">
            <h1 class="nav-item">{{ link.name }}</h1>
          </router-link>
        </li>
      </ul> -->
      <ul>
        <li v-for="(link, index) in links" :key="index" @click="activate(index)">
          <!-- <h1 class="nav-item">{{ link.name }}</h1> -->
          <router-link :to="link.to" class="nav-item">{{ link.name }}</router-link>
        </li>
      </ul>
    </v-flex>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    links: [
      {
        name: 'Cart',
        to: 'cart'
      },
      {
        name: 'All Products',
        to: 'all'
      },
      {
        name: 'Hand Towels',
        to: 'hand-towels'
      },
      {
        name: 'Table Runners',
        to: 'table-runners'
      },
      {
        name: 'Curling Iron Bags',
        to: 'curling-iron-bags'
      },
      {
        name: 'Jar Openers',
        to: 'jar-openers'
      },
      {
        name: 'Towel of the Month',
        to: '/towel-of-the-month'
      },
      {
        name: 'Subscribe',
        to: 'subscribe'
      },
      {
        name: 'Contact',
        to: 'contact'
      }
    ]
  }),
  methods: {
    activate (index) {
      let links = document.getElementsByClassName('nav-item')
      for (var i = 0; i < links.length; i++) {
        if (index === i) {
          links[i].classList.add('active')
        } else {
          links[i].classList.remove('active')
        }
      }
    }
  }
}
</script>

<style scoped>
.v-navigation-drawer {
  background-color: var(--peach);
  box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
  width: 400px;
}

.logo {
  width: 90%;
}

.ribbon {
  width: 95%;
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  list-style-type: none;
  padding-left: 0;
}

li {
  position: relative;
  cursor: default;
  padding: 20px 24px;
  transition: all .5s;
}

.nav-item {
  list-style-type: none;
  color: #000;
  text-decoration: none;
  font-size: 200%;
  font-weight: 300;
}

li:hover {
  background-color: rgba(255,255,255,0.3);
}

.active {
  border-bottom: 3px solid var(--orange);
}

</style>
