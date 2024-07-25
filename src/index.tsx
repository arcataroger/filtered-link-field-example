import {connect, Field, FieldIntentCtx, RenderFieldExtensionCtx} from 'datocms-plugin-sdk';
import 'datocms-react-ui/styles.css';
import { render } from './utils/render';
import {FilteredLinkField} from "./components/FilteredLinkField";

connect({

  overrideFieldExtensions(field: Field, ctx: FieldIntentCtx) {
    if (field.attributes.field_type === 'links') {
      return {
        addons: [
          { id: 'filteredLinkField' },
        ],
      };
    }
  },

  renderFieldExtension(fieldExtensionId: string, ctx: RenderFieldExtensionCtx) {
    switch (fieldExtensionId) {
      case 'filteredLinkField':
        return render(<FilteredLinkField ctx={ctx} />);
    }
  },
});
