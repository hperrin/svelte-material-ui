<div class="accordion-container">
  <Accordion>
    <Panel>
      <Header>Panel with Simple Content</Header>
      <Content>This panel has boring content.</Content>
    </Panel>
    <Panel>
      <Header>Panel with Extravagent Content</Header>
      <Content>
        <div
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          This panel has really cool content!
          <Wrapper>
            <div style="display: inline-block;">
              <Button on:click={() => menu.setOpen(true)}>
                <Label>Really?</Label>
              </Button>
              <Menu bind:this={menu}>
                <List>
                  <Item
                    on:SMUI:action={() => {
                      dialogOpen = true;
                    }}
                  >
                    <Text>Yes!</Text>
                  </Item>
                </List>
              </Menu>
            </div>
            <Tooltip yPos="below">
              This tooltip should extend outside the panel!
            </Tooltip>
          </Wrapper>
        </div>

        <Dialog
          bind:open={dialogOpen}
          aria-labelledby="complex-accordion-dialog-title"
          aria-describedby="complex-accordion-dialog-content"
        >
          <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
          <Title id="complex-accordion-dialog-title">A Dialog!</Title>
          <DialogContent id="complex-accordion-dialog-content">
            This dialog is even a child of the panel!
          </DialogContent>
          <Actions>
            <Button defaultAction>
              <Label>Wow!</Label>
            </Button>
          </Actions>
        </Dialog>
      </Content>
    </Panel>
    <Panel>
      <Header>Panel with Simple Content</Header>
      <Content>This panel has boring content.</Content>
    </Panel>
  </Accordion>
</div>

<script lang="ts">
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import Button, { Label } from '@smui/button';
  import Tooltip, { Wrapper } from '@smui/tooltip';
  import Menu from '@smui/menu';
  import List, { Item, Text } from '@smui/list';
  import Dialog, {
    Title,
    Content as DialogContent,
    Actions,
  } from '@smui/dialog';

  let menu: Menu;
  let dialogOpen = false;
</script>
