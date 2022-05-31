const { createApp, ref, computed } = Vue;

const app = Vue.createApp({
  setup() {
    const title = ref("กินไรยัง 🍛");
    const searchQuery = ref("");
    const showResult = ref(false);
    const result = ref("YOU GOING TO BE HUNGRY! 😵");

    const search = () => {
      if (searchQuery.value !== "") {
        if (filteredFood.value.length !== 0) {
          result.value = "IT'S A MATCH!";
        } else {
          result.value = "YOU GOING TO BE HUNGRY! 😵";
        }
        showResult.value = true;
      }
    };

    const suggested = ref(["ข้าวมันไก่", "ข้าวแกงกะหรี่", "ข้าวขาหมู"]);
    const filterSuggested = computed(() => {
      return suggested.value.filter((item) =>
        item.startsWith(searchQuery.value)
      );
    });

    const food = ref([
      {
        name: "อรรถข้าวมันไก่",
        type: "ข้าวมันไก่",
        promotion: "ติดต่อร้าน",
      },
      {
        name: "ข้าวมันไก่เจ๊ดาว",
        type: "ข้าวมันไก่",
        promotion: "ติดต่อร้าน",
      },
      {
        name: "ข้าวมันไก่ซอยยับ",
        type: "ข้าวมันไก่",
        promotion: "ติดต่อร้าน",
      },
      {
        name: "พี่บิ๊กข้าวขาหมูจานจุก",
        type: "ข้าวขาหมู",
        promotion: "ติดต่อร้าน",
      },
      {
        name: "ข้าวขาหมู สูตรเยาวราช",
        type: "ข้าวขาหมู",
        promotion: "ติดต่อร้าน",
      },
      {
        name: "วันดีข้าวขาหมู",
        type: "ข้าวขาหมู",
        promotion: "ติดต่อร้าน",
      },
      {
        name: "Mr.Curry Japan",
        type: "ข้าวแกงกะหรี่",
        promotion: "ติดต่อร้าน",
      },
      {
        name: "TokiDoki Curry",
        type: "ข้าวแกงกะหรี่",
        promotion: "ติดต่อร้าน",
      },
      {
        name: "CoCo ICHIBANYA",
        type: "ข้าวแกงกะหรี่",
        promotion: "ติดต่อร้าน",
      },
    ]);
    const filteredFood = computed(() => {
      return food.value
        .filter((item) => item.type.startsWith(searchQuery.value))
        .slice(0, 3);
    });

    return {
      title,
      searchQuery,
      suggested,
      filterSuggested,
      filteredFood,
      showResult,
      search,
      result,
    };
  },
});
app.mount("#app");
