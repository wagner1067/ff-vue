<template>
  <div class="products">
    <div class="product">
      <a :href="product.url_external_company" class="product-wrapper">
        <div class="image">
          <div class="image-item">
            <img :src="product.image" :alt="product.name" class="card-img-top product-image" />
          </div>
        </div>
        <div class="tags first-tag"></div>
        <div class="title">{{ product.name }}</div>
        <div class="price">
          <div class="pricer">
            <div class="price-block">
              <div class="n-price">
                <div class="price-current theme-third-color">
                  <span class="price-fraction">U$ {{ product.price }}</span>
                </div>
                <div class="tag-prime">
                  <div class="user-has-not">
                    R$ {{ product.price }}
                  </div>
                </div>
              </div>
            </div>

            <div class="interest-info">
              * Os preços e a disponibilidade estão sujeitos a alterações sem aviso prévio.
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<{
        name: string;
        price: number;
        photo_external_company: string;
        url_external_company: string;
        company: {
          logo?: string;
        };
      }>,
      required: true,
    },
    generalSetting: {
      type: Object as PropType<{
        dolar_price: number;
      }>,
      required: true,
    },
  },
  methods: {
    formatPrice(price: number): string {
      return price.toFixed(2); // Formata o preço como string com 2 casas decimais
    },
    formatPriceInBrl(dolarPrice: number, price: number): string {
      const brlPrice = price * dolarPrice;
      return brlPrice.toFixed(2); // Formata o preço em BRL
    },
  },
});
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product {
  width: 100%; /* Mantém o cartão ocupando a largura completa do contêiner */
  max-width: 300px; /* Limita a largura máxima do cartão */
  margin: 15px; /* Adiciona margem entre os produtos */
  border: 1px solid #e0e0e0; /* Borda leve ao redor do produto */
  border-radius: 10px; /* Arredonda os cantos do cartão */
  overflow: hidden; /* Esconde o conteúdo que excede o limite do cartão */
  transition: transform 0.3s; /* Adiciona uma animação ao passar o mouse */
}

.product:hover {
  transform: translateY(-5px); /* Eleva o cartão quando o mouse está sobre ele */
}

.product-image {
  height: 300px; /* Define uma altura fixa para a imagem */
  object-fit: cover; /* Ajusta a imagem para cobrir o espaço */
}

.title {
  font-weight: bold;
  padding: 10px 0;
}

.price {
  padding: 10px;
}

.interest-info {
  font-size: 0.8em;
  color: #999;
}
</style>