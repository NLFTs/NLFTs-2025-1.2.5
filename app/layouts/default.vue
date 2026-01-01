<template>
  <div class="text-white selection:bg-blue-600 selection:text-white">
    <UiWelcome/>
  <UiAppProgressBar />
    <UiTheBackground />
    <UiAppSearch />
    <UiNavbar /> <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>