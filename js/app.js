fetch('http://localhost:3000/data')
  .then(function (resp) {
    return resp.json()
  })
  .then(function (data) {
    const list = data.sort((a, b) => b.rating - a.rating)
    const html = list.map(prod => productItem(prod))

    document.querySelector('#pg').innerHTML = html.join('')
  })

function productItem(product) {
  const item = `<div class="product" 
  data-name="${product.name}" 
  data-brand="${product.brand}" 
  data-type="${product.product_type}" 
  tabindex="${product.id}">
  <figure class="product-figure">
    <img src="${product.image_link}" 
    width="215" height="215" alt="${product.brand} 
    ${product.name}" onerror="javascript:this.src='img/unavailable.png'"/>
  </figure>
  <section class="product-description">
    <h1 class="product-name">${product.name}</h1>
    <div class="product-brands"><span class="product-brand background-brand">${
      product.brand
    }</span>
  <span class="product-brand background-price">R$ ${(
    product.price * 5.5
  ).toFixed(2)}</span>
    </div>
  </section>
  ${loadDetails(product)}
</div>`
  return item
}
function tNull(rating) {
  if (rating == null) {
    return 0
  }
  return rating
}
function cNull(category) {
  if (category == null) {
    return ''
  }
  return category
}

function loadDetails(product) {
  let details = `<section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${product.brand}</div>
        </div>
      </div><div class="details-row">
        <div>Price</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${product.price}</div>
        </div>
      </div><div class="details-row">
        <div>Rating</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${tNull(
            product.rating
          )}</div>
        </div>
      </div><div class="details-row">
        <div>Category</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${cNull(
            product.category
          )}</div>
        </div>
      </div><div class="details-row">
        <div>Product_type</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${
            product.product_type
          }</div>
        </div>
      </div></section>`
  return details
}
