<template>
  <div>
    <NuxtLayout>
      <template #header>
        <HeaderWithArrowBack
          :path="'/transactions/' + operationId"
          text="Детали"
        />
      </template>

      <div class="flex flex-col content-container mt-[58px]">
        <div v-for:="(status, idx) in selectedTransacion.statuses">
          <div class="flex gap-3.5 items-center">
            <div>
              <NuxtImg
                :src="'/icons/' + status.logo"
                alt="Создано"
                class="w-11 h-11"
              />
            </div>
            <div>
              <p class="heading-4">{{ status.description }}</p>
              <p class="body-text-small text-placeholder-text-color">
                {{
                  new Date(Date.parse(status.date))
                    .toLocaleDateString("ru-RU", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    .replace(",", " ")
                }}
              </p>
            </div>
          </div>
          <div
            class="border-l-[2px] border-[#C7E8FD] h-[46px] ml-[21px] my-1.5"
            v-if="idx == 0"
          ></div>
          <div
            class="border-l-[2px] h-[46px] ml-[21px] my-1.5"
            :class="
              selectedTransacion.success
                ? 'border-[#6FCF97]'
                : 'border-[#EB5757]'
            "
            v-if="idx == 1"
          ></div>
        </div>

        <!-- <div class="flex gap-3.5 items-center">
          <div>
            <NuxtImg
              src="/icons/txCreated.svg"
              alt="Создано"
              class="w-10 h-10"
            />
          </div>
          <div>
            <p class="heading-4">Пополнение создано</p>
            <p class="body-text-small text-placeholder-text-color">
              24.12.2024 19:02
            </p>
          </div>
        </div>
        <div class="border-l-[2px] border-[#C7E8FD] h-[46px] ml-[21px]"></div>

        <div class="flex gap-3.5 items-center">
          <div>
            <NuxtImg
              src="/icons/txProccess.svg"
              alt="Обрабатывается"
              class="w-10 h-10"
            />
          </div>
          <div>
            <p class="heading-4">Пополнение обрабатывается</p>
            <p class="body-text-small text-placeholder-text-color">
              24.12.2024 19:09
            </p>
          </div>
        </div>
        <div class="border-l-[2px] border-[#6FCF97] h-[46px] ml-[21px]"></div>

        <div class="flex items-center gap-3.5">
          <div>
            <NuxtImg src="/icons/txEnd.svg" alt="Выполнено" class="w-10 h-10" />
          </div>
          <div>
            <p class="heading-4">Пополнение выполнено</p>
            <p class="body-text-small text-placeholder-text-color">
              24.12.2024 19:12
            </p>
          </div>
        </div> -->
      </div>
      <ConfirmedActionButton
        primaryBtnText="Подать аппеляцию"
        primaryTo="/chat"
        secondaryBtnText="Написать в поддержку"
        secondaryTo="/chat"
      >
      </ConfirmedActionButton>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  pageTransition: {
    name: "page",
  },
});

onMounted(() => {
  if (!selectedTransacion.value?.id) {
    navigateTo("/transactions");
  }
});

const route = useRoute();
const operationId = route.params.id;

const transactionHistoryStore = useTransactionHistoryStore();
const { selectedTransacion } = storeToRefs(transactionHistoryStore);
</script>
