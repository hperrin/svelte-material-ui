<svelte:head>
  <title>Text Field - SMUI</title>
</svelte:head>

<section>
  <h2>Text Field</h2>

  <Demo component={Showcase} file="textfield/_Showcase.svelte" />

  <Demo component={Standard} file="textfield/_Standard.svelte">Standard</Demo>

  <Demo component={Filled} file="textfield/_Filled.svelte">Filled</Demo>

  <Demo component={Outlined} file="textfield/_Outlined.svelte">Outlined</Demo>

  <Demo component={ShapedFilled} file="textfield/_ShapedFilled.svelte">
    Shaped Filled
    <svelte:fragment slot="subtitle">Styled with CSS</svelte:fragment>
  </Demo>

  <Demo component={ShapedOutlined} file="textfield/_ShapedOutlined.svelte">
    Shaped Outlined
    <svelte:fragment slot="subtitle">Styled with CSS</svelte:fragment>
  </Demo>

  <Demo component={Required} file="textfield/_Required.svelte">Required</Demo>

  <Demo component={Disabled} file="textfield/_Disabled.svelte">Disabled</Demo>

  <Demo component={Prefixed} file="textfield/_Prefixed.svelte">Prefixed</Demo>

  <Demo component={Suffixed} file="textfield/_Suffixed.svelte">Suffixed</Demo>

  <Demo
    component={NoLabelOrHelperText}
    file="textfield/_NoLabelOrHelperText.svelte"
  >
    Without label or helper text
  </Demo>

  <Demo
    component={PersistentHelperText}
    file="textfield/_PersistentHelperText.svelte"
  >
    With persistent helper text
  </Demo>

  <Demo component={CharacterCount} file="textfield/_CharacterCount.svelte">
    With character count
  </Demo>

  <Demo
    component={HelperTextCharacterCount}
    file="textfield/_HelperTextCharacterCount.svelte"
  >
    With helper text and character count
  </Demo>

  <Demo component={BothIcons} file="textfield/_BothIcons.svelte">
    Both icons
  </Demo>

  <Demo component={Textarea} file="textfield/_Textarea.svelte">Textarea</Demo>

  <Demo
    component={TextareaCharacterCount}
    file="textfield/_TextareaCharacterCount.svelte"
  >
    Textarea with character count
  </Demo>

  <Demo component={FullWidth} file="textfield/_FullWidth.svelte">
    Full width
  </Demo>

  <Demo
    component={FullWidthTextarea}
    file="textfield/_FullWidthTextarea.svelte"
  >
    Full width textarea
  </Demo>

  <Demo
    component={FixedSizeTextarea}
    file="textfield/_FixedSizeTextarea.svelte"
  >
    Fixed Size Textarea
    <svelte:fragment slot="subtitle">
      Turn off the browser's native resize feature.
    </svelte:fragment>
  </Demo>

  <Demo component={ElementsInLabel} file="textfield/_ElementsInLabel.svelte">
    Elements in the label
  </Demo>

  <Demo component={DifferentTypes} file="textfield/_DifferentTypes.svelte">
    Different input types
  </Demo>

  <Demo component={ManualSetup} file="textfield/_ManualSetup.svelte">
    Manual setup
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Showcase from './_Showcase.svelte';
  import Standard from './_Standard.svelte';
  import Filled from './_Filled.svelte';
  import Outlined from './_Outlined.svelte';
  import ShapedFilled from './_ShapedFilled.svelte';
  import ShapedOutlined from './_ShapedOutlined.svelte';
  import Required from './_Required.svelte';
  import Disabled from './_Disabled.svelte';
  import Prefixed from './_Prefixed.svelte';
  import Suffixed from './_Suffixed.svelte';
  import NoLabelOrHelperText from './_NoLabelOrHelperText.svelte';
  import PersistentHelperText from './_PersistentHelperText.svelte';
  import CharacterCount from './_CharacterCount.svelte';
  import HelperTextCharacterCount from './_HelperTextCharacterCount.svelte';
  import BothIcons from './_BothIcons.svelte';
  import Textarea from './_Textarea.svelte';
  import TextareaCharacterCount from './_TextareaCharacterCount.svelte';
  import FullWidth from './_FullWidth.svelte';
  import FullWidthTextarea from './_FullWidthTextarea.svelte';
  import FixedSizeTextarea from './_FixedSizeTextarea.svelte';
  import ElementsInLabel from './_ElementsInLabel.svelte';
  import DifferentTypes from './_DifferentTypes.svelte';
  import ManualSetup from './_ManualSetup.svelte';
</script>
