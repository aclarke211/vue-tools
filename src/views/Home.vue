<template>
  <div :class="className">
    <h1 :class="`${className}__title`">{{ titleText }}</h1>

    <div class="tool-types">
      <div
        class="type"
        v-for="(toolType, typeKey) in toolTypes"
        :key="typeKey">
          <router-link :to="{
            name: 'tools',
            params: {
              toolName: toolType.name.toLowerCase(),
            },
          }"
          class="type__link">
            <img class="type__img" :src="toolType.icon">
            <p class="type__name">{{ toolType.name }}</p>
          </router-link>
      </div>
    </div>

    <ExampleComponent />

  </div>
</template>

<script>
import modulesList from '../../sfc/modules/_base/modules-list';
import utilsList from '../../sfc/utils/_base/utils-list';
import ExampleComponent from '../../sfc/components/_base/ExampleComponent.vue';

export default {
  name: 'home',

  data: () => ({
    className: 'home',
    titleText: 'Vue Tools',
  }),

  computed: {
    toolTypes() {
      return [
        {
          name: 'Modules',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Toicon-icon-blueprint-experience.svg/1024px-Toicon-icon-blueprint-experience.svg.png',
          list: modulesList,
        },
        {
          name: 'Utils',
          icon: 'https://cdn.pixabay.com/photo/2016/03/31/18/24/screwdriver-1294338_960_720.png',
          list: utilsList,
        },
      ];
    },
  },

  components: {
    ExampleComponent,
  },
};
</script>

<style lang="scss">
@import '../../sfc/css/_base/mixins.scss';

  .home {
    &__title {
      font-size: 2.25rem;
      text-align: center;
      margin: 1rem;
    }

    .tool-types {
      display: flex;
      margin: 1rem;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      @include tablet {
        flex-direction: row;
      }

      &:hover .type__link {
        opacity: .25;
      }

      .type {
        @include flexbox;
        flex-direction: column;
        flex: 0 0 23%;
        margin: 2rem .5rem .5rem;
        padding: .5rem;
        text-align: center;
        color: darkslategrey;


        &__link {
          text-decoration: none;
          color: inherit;
          transition: all .5s;

          &:hover {
            opacity: 1;
          }
        }

        &__img {
          $imgSize: 8rem;

          display: block;
          height: $imgSize;
          width: $imgSize;
        }

        &__name {
          font-size: 1.25rem;
        }
      }
    }
  }
</style>
