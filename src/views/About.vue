<style scoped lang="scss">
@import "@/assets/scss/About.scss";
</style>
<template>
<div class="about">
<br>
<br>
<div class="container text-center">
  <div class="row">
        <div class="col-sm">
            Aplikacja pełna podzielonych na kategorie przepisów, wyposażona w bardzo dobrą wyszukiwarkę oraz 
            w funkcje ułatwiające przyrządzanie dań. Każdy przepis podzielony jest na czas przygotowania,
             instrukcję - pokazującą dokładnie kolejność wykonywania dania. 
             Ponadto aplikacja posiada dodatkową funkcjonalność, która pozwala na dodanie składników 
             znajdujących się w naszej lodówce i na tej podstawie znajdywane są przepisy, 
             w których można wykorzystać dane składniki. Przepisy są pobierane z wykorzystaniem api. 
             Zastosowano również drugie api, które pozwala na wyświetlanie cytatów.
        </div>
    </div>
</div>
<br>
<br>

<div class="card-group text-center">
  <div class="card">
    <img class="card-img-top" src="@/assets/about_register.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Rejestracja</h5>
      <p class="card-text">Uwierzytelnianie użytkowników zarówno tradycyjne, jak i za pomocą mediów społecznościowych</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="@/assets/about_login.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Logowanie</h5>
      <p class="card-text">Możliwość zalogowania do personalnego konta.</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="@/assets/about_search.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Wyszukiwanie przepisów</h5>
      <p class="card-text">Doskonała wyszukiwarka pozwalająca na wyszukanie dania, na które mamy ochotę!</p>
    </div>
    
  </div>
</div>

<br>
<br>

<div class="card-group text-center">
  <div class="card">
    <img class="card-img-top" src="@/assets/about_favourite.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Ulubione</h5>
      <p class="card-text">Dodaj swoje danie do ulubionych, aby wrócić do niego gdy tylko będziesz miał na to ochotę!</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="@/assets/about_random.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Lodówka</h5>
      <p class="card-text">Dobranie przepisów na podstawie produktów, które akurat są w Twojej lodówce. Pozwala na dodanie maksymalnie 3 produktów</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="@/assets/about_favourites.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Personalizacja ulubionych przepisów</h5>
      <p class="card-text">Możliwość przypisania ulubionych przepisów do swojego konta</p>
    </div>
    
  </div>
</div>


<div class="card-group text-center">
  <div class="card">
    <img class="card-img-top" src="@/assets/about_firebase.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Implementacja Google Firebase</h5>
      <p class="card-text">Implementacja google firebase pozwala na wykorzystywanie social mediów do logowania, ale także doskonale sprawdza się w innych funkcjonalnościach, takich jak "Ulubione"</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="@/assets/about_recipes.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Wykorzystanie zewnętrznego API - przepisy</h5>
      <p class="card-text">Dobranie przepisów na podstawie dodanych produktów. Przepisy generowane są na podstawie dodanych składników, preferowanego dania, lub wykorzystując aplet kuchni świata</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="@/assets/about_quotes.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Wykorzystanie zewnętrznego API - cytaty</h5>
      <p class="card-text">Cytaty generowane z API, załączone na dole strony głównej. </p>
    </div>
    
  </div>
</div>


<div class="card-group text-center">
  <div class="card">
    <img class="card-img-top" src="@/assets/about_ingredients.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Wszystkie składniki</h5>
      <p class="card-text">Wygenerowane składniki wyświetlane są w liście pobieranej z zewnętrznego API</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="@/assets/about_instructions.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Wyświetlanie instrukcji</h5>
      <p class="card-text">Wszystkie instrukcje załączone do danego przepisu wyświetlane są na dole strony, są one pobierane z zewnętrznego API</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src="@/assets/about_cuisines.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Kuchnie świata</h5>
      <p class="card-text">Możliwość wybrania kuchni jaka nas interesuje oraz na tej podstawie wygenerowanie przepisów.</p>
    </div>
    
  </div>
</div>
    </div>
</template>