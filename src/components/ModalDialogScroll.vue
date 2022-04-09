<template>
  <div
    v-if="modal"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    id="my-modal"
  ></div>
  <div
    v-if="modal"
    class="fixed inset-0 flex justify-center items-center w-full h-full py-12 px-5 md:px-0"
  >
    <div class="md:w-1/2 bg-white h-full overflow-hidden">
      <div
        class="px-10 py-5 shadow-md text-gray-700 font-semibold bg-white flex items-center justify-between"
      >
        <span>TERMS AND CONDITION</span>
        <i class="bi bi-x text-2xl font-bold" @click="modal = false"></i>
      </div>
      <div
        class="text-gray-500 tex-sm px-10 pt-5 pb-24 text-justify flex flex-col gap-3 h-full overflow-y-scroll"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          laboriosam nihil magni dolorem unde impedit, libero perspiciatis et?
          Totam veritatis doloremque aliquid error, cumque ut aperiam corporis
          dicta corrupti laboriosam! Laboriosam, esse maxime! Inventore
          necessitatibus, culpa ratione vel maiores at cum expedita blanditiis
          odio, tempora veniam possimus recusandae laboriosam ex rerum neque
          delectus! Suscipit iusto perferendis nostrum eveniet. Doloribus soluta
          veniam quaerat neque nesciunt officiis reprehenderit nihil harum quia
          a magni in quod vero iusto consequatur, dolor quam distinctio, iure
          beatae voluptate? Rem suscipit dignissimos minima hic quasi esse neque
          soluta, officiis itaque voluptatibus consequuntur incidunt cumque
          eligendi pariatur impedit?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quae
          voluptate totam quasi corporis itaque minima dolores quis maxime
          reprehenderit, provident possimus quia nihil atque officia temporibus
          aperiam eos rerum ab voluptatibus. Et modi, eius dolor pariatur
          delectus saepe debitis, corrupti possimus sequi non, numquam hic!
          Aperiam accusamus omnis ad quisquam aspernatur placeat soluta quo
          veritatis laudantium sunt. Cumque reiciendis possimus nobis nam
          laboriosam accusamus dicta rerum mollitia consectetur quo. Quas
          sapiente harum consectetur quae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          temporibus aliquam facilis exercitationem, ratione dolores eum sunt
          consequatur placeat iusto architecto vel voluptates numquam pariatur
          aut saepe tempora! Sit voluptatibus non error aut voluptatum dolores
          ipsa illo amet harum officia reprehenderit, doloremque repellendus
          fugit quis voluptate id consequuntur molestiae dicta mollitia dolore
          iure ad. Nihil unde placeat dicta quam sapiente? Eius quo nam ab
          magnam beatae quod illum quia qui, voluptate reiciendis iste amet
          vitae possimus, sed delectus id rerum sit aliquam inventore? Possimus
          eos sunt aspernatur, quia, voluptatem pariatur labore consectetur,
          nesciunt ea enim sed recusandae quibusdam sint. Ipsam dolor vel, illo
          id, velit et a ipsa porro consequatur in quos dolorem. Hic, eius
          inventore officiis et adipisci voluptate?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          natus laudantium illum iste debitis a cupiditate dolore temporibus
          officiis suscipit facere eum ipsum quod ratione repudiandae neque
          corrupti libero reprehenderit ullam nemo! Nesciunt, natus consequuntur
          illo nemo iste totam cupiditate nam obcaecati velit tenetur voluptas
          magnam a eveniet ipsum corporis? Laboriosam vero minus non voluptatem
          eligendi aspernatur cumque quia ab doloribus dignissimos, maxime
          recusandae, dolores expedita voluptatibus! Assumenda expedita, aliquam
          sapiente et, itaque vero doloremque iste inventore numquam odio ullam
          unde? Ea quia omnis, similique nulla velit assumenda exercitationem,
          quis minima, quasi commodi voluptates culpa sunt iusto laboriosam
          pariatur molestiae.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDialogScroll",
  components: {},
  props: ['modal']
};
</script>
