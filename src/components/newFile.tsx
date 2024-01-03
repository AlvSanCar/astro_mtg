import BentoItem from './BentoItem.astro';

<Fragment>
<section class={`
        w-full max-w-[1400px]
        grid grid-cols-10 auto-rows-[30rem] gap-4
        mx-auto p-20
    `}>
<BentoItem class="col-span-10 md:col-span-6" title="Reglas" subtitle="Conoce las reglas del juego">

<div slot="image" class="
                absolute left-0 top-0 bottom-0 
                h-full group-hover:scale-75 transition-scale duration-1000
                ease-in-out opacity-90 bg-center bg-cover bg-no-repeat bg-blue-850
            " style="background-image: url('../images/Cartas.jpg');" />

</BentoItem>
<BentoItem class="col-span-10 md:col-span-4" title="Campeonatos" subtitle="Todos los campeonatos del formato">
<div slot="image" class="
                absolute left-0 top-0 bottom-0 
                h-full group-hover:scale-75 transition-scale duration-1000
                ease-in-out opacity-90 bg-center bg-cover bg-no-repeat bg-blue-850
            " style="background-image: url('../images/Cartas.jpg');" />
</BentoItem>
<BentoItem class="col-span-10 md:col-span-4" title="Nuevas Expansiones" subtitle="Conoce las cartas de las últimas ediciones" />
<BentoItem class="col-span-10 md:col-span-6" title="Mazos" subtitle="Crea tu propio mazo" />
</section>


</Fragment>;
