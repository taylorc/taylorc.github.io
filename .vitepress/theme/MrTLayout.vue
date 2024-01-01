<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-features>
      <div class="wrapper" >
        <div class="container" >
          <div class="features" >
            <section class="feature" >
              <h2 class="title" >About Me</h2>
              <p class="details" >
                Some relevant information about the author of this site: <ul>
                    <li>Born in Middleton, England and emigrate to Australia in 1983</li>
                    <li>Current studying a Masters of Business Administration (MBA) at the Unversity of Southern Queensland </li>
                    <li>Has been HSD's Chief Technology Officer for over 2 years.</li>
                    <li>Has spent over 20 years in the Technology industry working for finance (superannuation and accounting firms), Non for profit and Independent Software Vendors (ISVs)</li>
                    </ul>
              </p>
            </section>
            <section class="feature" >
              <h2 class="title" >Short About Me</h2>
              <p class="details" >
                I have a passion for forging authentic relationships and using
                technology to help organisations reach their full potential. I
                believe that open and honest conversation will break down silos.
              </p>
            </section>
            <section class="feature" >
              <h2 class="title" >Performant</h2>
              <p class="details" >
                VitePress generates pre-rendered static HTML for each page, and
                runs as an SPA once a page is loaded.
              </p>
            </section>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>