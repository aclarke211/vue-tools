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

  </div>
</template>

<script>
import modulesList from '../../sfc/modules/base/modules-list';
import utilsList from '../../sfc/utils/base/utils-list';

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
          icon: 'https://cdn.pixabay.com/photo/2017/07/07/02/05/symbol-2480162_960_720.png',
          list: modulesList,
        },
        {
          name: 'Utils',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Jigsaw_piece_yellow_01.svg',
          list: utilsList,
        },
      ];
    },
  },
};
</script>

<style lang="scss">
@import '../../sfc/css/base/mixins.scss';

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
