<template>
  <div :class="className">
    <h1 :class="`${className}__title`">{{ titleText }}</h1>

    <div class="tool-types">
      <div
        class="type"
        v-for="(toolType, typeKey) in toolTypes"
        :key="typeKey">
          <router-link :to="{
            name: 'toolList',
            params: {
              toolName: toolType.name.toLowerCase(),
            },
          }"
          class="type__link">
            <img class="type__img" :src="toolType.icon">
            <p class="type__name">{{ toolType.name }}</p>
          </router-link>
          <!-- <h2 class="type__title">{{ toolType.name }}</h2> -->
          <!-- <div
            :class="['category', category]"
            v-for="(category, categoryKey) in toolType.list"
            :key="categoryKey">
             <h3 class="category__title">{{ formattedName(categoryKey) }}</h3>
             <div
              :class="['tool', tool]"
              v-for="(tool, toolKey) in category"
              :key="toolKey">
              <div
                class="btn tool-btn"
                @click="goToShowcaseRoute(toolType, category, toolKey)">
                {{ formattedName(tool.name) }}
              </div>
             </div>
          </div> -->
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

  methods: {
    // formattedName(name) {
    //   return (name.charAt(0).toUpperCase()
    //     + name.slice(1)).match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
    // },

    // goToShowcaseRoute(toolType, category, toolKey) {
    //   this.$router.push({
    //     name: `${toolType.name.toLowerCase()}Showcase`,
    //     params: {
    //       name: category[toolKey].name || null,
    //       importRef: category[toolKey].srcFile || null,
    //       additionalTemplates: category[toolKey].additionalTemplates || null,
    //       additionalScripts: category[toolKey].additionalScripts || null,
    //     },
    //   });
    // },
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

        // &__title {
        //   margin: 0;
        //   padding: 0;
        //   font-size: 1.75rem;
        //   color: darkslategrey;
        // }

        // .category {
        //   @include flexbox;
        //   flex-direction: column;
        //   padding: .5rem;
        //   margin: .5rem;

        //   &__title {
        //     margin: 0;
        //     padding: 0;
        //     font-size: 1.25rem;
        //     color: slategrey;
        //   }

        //   .tool {
        //     @include flexbox;

        //     &-btn {
        //       @include hover-invert(cornflowerblue, white, 2px);
        //       @include flexbox;
        //       margin: 1rem;
        //       padding: .75rem 2rem;
        //       text-align: center;
        //       flex: 1 0 auto;
        //     }
        //   }
        // }
      }
    }
  }
</style>
