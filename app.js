const Lights = {
  data() {
    return {
      cores: [],
      estaLigado: false,
      intervalo: 1,
      input_cor: "#000000",
      error: false,
    };
  },
  methods: {
    TurnOnOff() {
      this.estaLigado = !this.estaLigado;
      let qtd_cores = this.cores.length;

      if (this.estaLigado) {
        for (let index = 0; index < qtd_cores; index++) {
          this.cores[index][2] = true;
        }
      } else {
        for (let index = 0; index < qtd_cores; index++) {
          this.cores[index][2] = false;
        }
      }
    },
    AdicionaLuz(e) {
      e.preventDefault();
      if (this.cores.length < 7) {
        this.cores.push([this.cores.length + 1, `${this.input_cor}`, false]);
      } else {
        this.error = true;
      }
    },
    LimpaLuz() {
      this.cores = [];
      console.log(this.cores);
      this.error = false;
      this.estaLigado = false
    },
    dismiss(e) {
      e.preventDefault();
      this.error = false;
    },
  },
  computed: {
    AnoAtual() {
      const data = new Date();
      const ano = data.getFullYear();

      return ano;
    },
  },
};

Vue.createApp(Lights).mount("#app");
