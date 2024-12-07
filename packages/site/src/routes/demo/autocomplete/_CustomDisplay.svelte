<div>
  <Autocomplete
    {options}
    getOptionLabel={(option) => (option ? option.text : '')}
    bind:value
    label="Custom Display"
  >
    {#snippet loading()}
      <!--
        This doesn't get used except for async loading, but I'm putting it in
        here to show you.
      -->
      <Text>Loading...</Text>
    {/snippet}
    {#snippet error()}
      <!--
        This doesn't get used except for async loading, but I'm putting it in
        here to show you.
      -->
      <Text>Error while fetching suggestions.</Text>
    {/snippet}
    {#snippet match(item)}
      <Graphic>
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d={item.icon} />
        </svg>
      </Graphic>
      <Text>{item.text}</Text>
    {/snippet}
    {#snippet noMatches()}
      <Graphic>
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d={mdiEmoticonSad} />
        </svg>
      </Graphic>
      <Text>Nothing found</Text>
    {/snippet}
  </Autocomplete>

  <pre class="status">Selected: {#if value}<svg
        style="height: 24px; vertical-align: middle;"
        viewBox="0 0 24 24">
    <path fill="currentColor" d={value.icon} />
  </svg> {value.text}{/if}</pre>
</div>

<script lang="ts">
  import {
    mdiEmoticonSad,
    mdiBat,
    mdiBee,
    mdiBird,
    mdiBug,
    mdiButterfly,
    mdiCat,
    mdiCow,
    mdiDog,
    mdiDolphin,
    mdiDonkey,
    mdiDuck,
    mdiElephant,
    mdiFish,
    mdiHorse,
    mdiJellyfish,
    mdiKangaroo,
    mdiKoala,
    mdiOwl,
    mdiPanda,
    mdiPenguin,
    mdiPig,
    mdiRabbit,
    mdiRodent,
    mdiShark,
    mdiSheep,
    mdiSnail,
    mdiSnake,
    mdiSpider,
    mdiTortoise,
    mdiTurkey,
    mdiTurtle,
  } from '@mdi/js';
  import Autocomplete from '@smui-extra/autocomplete';
  import { Graphic, Text } from '@smui/list';

  type Item = {
    text: string;
    icon: string;
  };

  // When options are objects, you need to wrap them in a $state rune, so that
  // Svelte can compare the objects properly.
  let options: Item[] = $state([
    { text: 'Bat', icon: mdiBat },
    { text: 'Bee', icon: mdiBee },
    { text: 'Bird', icon: mdiBird },
    { text: 'Bug', icon: mdiBug },
    { text: 'Butterfly', icon: mdiButterfly },
    { text: 'Cat', icon: mdiCat },
    { text: 'Cow', icon: mdiCow },
    { text: 'Dog', icon: mdiDog },
    { text: 'Dolphin', icon: mdiDolphin },
    { text: 'Donkey', icon: mdiDonkey },
    { text: 'Duck', icon: mdiDuck },
    { text: 'Elephant', icon: mdiElephant },
    { text: 'Fish', icon: mdiFish },
    { text: 'Horse', icon: mdiHorse },
    { text: 'Jellyfish', icon: mdiJellyfish },
    { text: 'Kangaroo', icon: mdiKangaroo },
    { text: 'Koala', icon: mdiKoala },
    { text: 'Owl', icon: mdiOwl },
    { text: 'Panda', icon: mdiPanda },
    { text: 'Penguin', icon: mdiPenguin },
    { text: 'Pig', icon: mdiPig },
    { text: 'Rabbit', icon: mdiRabbit },
    { text: 'Rodent', icon: mdiRodent },
    { text: 'Shark', icon: mdiShark },
    { text: 'Sheep', icon: mdiSheep },
    { text: 'Snail', icon: mdiSnail },
    { text: 'Snake', icon: mdiSnake },
    { text: 'Spider', icon: mdiSpider },
    { text: 'Tortoise', icon: mdiTortoise },
    { text: 'Turkey', icon: mdiTurkey },
    { text: 'Turtle', icon: mdiTurtle },
  ]);

  let value: Item | undefined = $state();
</script>
