<template>
  <div>
    <Sidebar></Sidebar>
    <v-container class="main-content">
      <v-layout row>
        <v-select
          :items="selection"
          class="sort"
          color="#66C7C4"
          label="Order By"
          solo
        ></v-select>
        <v-text-field
          prepend-icon="search"
          class="search"
          label="Search"
          solo
        ></v-text-field>
      </v-layout>
      <v-layout row wrap justify-space-around>
        <!-- <v-card v-for="item in items[0]" :key="item.id"> -->
        <div
          v-for="item in items[0]"
          :key="item.id"
          class="item"
        >
          <v-img
            class="image"
            :src="item.img"
            aspect-ratio="1.5"
          ></v-img>

          <div class="text-overlay">
            <h3 class="headline mb-0">{{ item.name}}</h3>
            <div>{{ item.price }}</div>
          </div>
      </div>
      </v-layout>
      <section class="pagination">
        <v-pagination
          v-model="page"
          :length="15"
          color="#66C7C4"
          total-visible="8"
          circle
        ></v-pagination>
      </section>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeDesktop',
  components: {
    Sidebar: () => import(/* webpackChunkName: 'Sidebar' */ '../../Layout/Sidebar.vue')
  },
  data: () => ({
    selection: ['Price (low-high)', 'Price (high-low)', 'Newest to Oldest', 'Oldest to Newest'],
    page: 1,
    items: [
      [
        {
          id: 1,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 2,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 3,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 4,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 5,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 6,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 7,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 8,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 9,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 10,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 11,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 12,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 13,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 14,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 15,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        },
        {
          id: 16,
          img: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          name: 'name',
          price: 'price'
        }
      ]
    ]
  })
}
</script>

<style scoped>
.main-content {
  margin-left: 300px;
  /* padding: npm 0px 40px; */
}
.item {
  position: relative;
  width: 100%;
  max-width: 250px;
  margin: 10px;
  cursor: pointer;
}
.image {
  display: block;
}
.text-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: var(--blue);
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
}
.text-overlay:hover {
  opacity: 1;
}
.sort {
  flex-grow: 0;
  width: 350px;
}
.sort,
.search {
  margin: 0px 40px;
}
.pagination {
  width: calc(100% - 300px);
  position: absolute;
  bottom: 40px;
  display: flex;
  justify-content: center;
}

.v-card {
  width: 22%;
  margin-bottom: 20px;
}
</style>
