<div>
  <List class="demo-list" threeLine nonInteractive>
    <Item>
      <Text>
        <PrimaryText>FruitPhone 11</PrimaryText>
        <SecondaryText>$1,100</SecondaryText>
        <SecondaryText>A beautiful phone with good specs.</SecondaryText>
      </Text>
    </Item>
    <Item>
      <Text>
        <PrimaryText>Addition Phone</PrimaryText>
        <SecondaryText>$700</SecondaryText>
        <SecondaryText
          >Pretty much the same phone, but a different brand name and OS.</SecondaryText
        >
      </Text>
    </Item>
  </List>
</div>

<script>
  import List, { Item, Text, PrimaryText, SecondaryText } from '@smui/list';
</script>

<style>
  * :global(.demo-list) {
    max-width: 600px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
  }
</style>
