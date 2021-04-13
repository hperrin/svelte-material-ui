<svelte:head>
  <title>Text Field - SMUI</title>
</svelte:head>

<section>
  <h2>Text Field</h2>

  <Demo component={Showcase} file="textfield/Showcase.svelte" />

  <Demo component={Standard} file="textfield/Standard.svelte">Standard</Demo>

  <Demo component={Filled} file="textfield/Filled.svelte">Filled</Demo>

  <Demo component={Outlined} file="textfield/Outlined.svelte">Outlined</Demo>

  <Demo component={ShapedFilled} file="textfield/ShapedFilled.svelte">
    Shaped Filled
    <svelte:fragment slot="subtitle">Styled with CSS</svelte:fragment>
  </Demo>

  <Demo component={ShapedOutlined} file="textfield/ShapedOutlined.svelte">
    Shaped Outlined
    <svelte:fragment slot="subtitle">Styled with CSS</svelte:fragment>
  </Demo>

  <Demo component={Disabled} file="textfield/Disabled.svelte">Disabled</Demo>

  <Demo
    component={NoLabelOrHelperText}
    file="textfield/NoLabelOrHelperText.svelte"
  >
    Without label or helper text
  </Demo>

  <Demo
    component={PersistentHelperText}
    file="textfield/PersistentHelperText.svelte"
  >
    With persistent helper text
  </Demo>

  <Demo component={CharacterCount} file="textfield/CharacterCount.svelte">
    With character count
  </Demo>

  <Demo
    component={HelperTextCharacterCount}
    file="textfield/HelperTextCharacterCount.svelte"
  >
    With helper text and character count
  </Demo>

  <Demo component={BothIcons} file="textfield/BothIcons.svelte">
    Both icons
  </Demo>

  <Demo component={Textarea} file="textfield/Textarea.svelte">Textarea</Demo>

  <Demo
    component={TextareaCharacterCount}
    file="textfield/TextareaCharacterCount.svelte"
  >
    Textarea with character count
  </Demo>

  <Demo component={FullWidth} file="textfield/FullWidth.svelte">
    Full width
  </Demo>

  <Demo component={FullWidthTextarea} file="textfield/FullWidthTextarea.svelte">
    Full width textarea
  </Demo>

  <Demo component={ElementsInLabel} file="textfield/ElementsInLabel.svelte">
    Elements in the label
  </Demo>

  <Demo component={DifferentTypes} file="textfield/DifferentTypes.svelte">
    Different input types
  </Demo>

  <Demo component={ManualSetup} file="textfield/ManualSetup.svelte">
    Manual setup
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Showcase from './Showcase.svelte';
  import Standard from './Standard.svelte';
  import Filled from './Filled.svelte';
  import Outlined from './Outlined.svelte';
  import ShapedFilled from './ShapedFilled.svelte';
  import ShapedOutlined from './ShapedOutlined.svelte';
  import Disabled from './Disabled.svelte';
  import NoLabelOrHelperText from './NoLabelOrHelperText.svelte';
  import PersistentHelperText from './PersistentHelperText.svelte';
  import CharacterCount from './CharacterCount.svelte';
  import HelperTextCharacterCount from './HelperTextCharacterCount.svelte';
  import BothIcons from './BothIcons.svelte';
  import Textarea from './Textarea.svelte';
  import TextareaCharacterCount from './TextareaCharacterCount.svelte';
  import FullWidth from './FullWidth.svelte';
  import FullWidthTextarea from './FullWidthTextarea.svelte';
  import ElementsInLabel from './ElementsInLabel.svelte';
  import DifferentTypes from './DifferentTypes.svelte';
  import ManualSetup from './ManualSetup.svelte';
</script>
