<FormField>
  <Switch bind:checked={agreed} />
  <span slot="label">
    I agree to the terms and conditions of the software, <small
      style="opacity: .4;"
      >and hereby sign away my rights just to use this app.</small
    >
  </span>
</FormField>

<pre class="status">Agreed: {agreed ? 'Yes, muahahah.' : 'Not yet.'}</pre>

<script lang="ts">
  import FormField from '@smui/form-field';
  import Switch from '@smui/switch';

  let agreed = false;
</script>
