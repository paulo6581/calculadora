function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.clickbutoes();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1); // seleciona elementos de um array ou string
        },


        clickbutoes() {
            document.addEventListener('click', (e) => {
                const elemento = e.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnForDisplay(elemento.innerText);
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (elemento.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }); 
        },

        btnForDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();