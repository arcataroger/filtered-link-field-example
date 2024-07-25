import {Canvas, Button} from 'datocms-react-ui';
import {RenderFieldExtensionCtx} from "datocms-plugin-sdk";

type PropTypes = {
    ctx: RenderFieldExtensionCtx;
};
export const FilteredLinkField = ({ctx}: PropTypes) => {

    const chooseFilteredItem = async () => {
        const selectedRecords = await ctx.selectItem('CAm14tHtS1yvtZ_tkzSEww', {
            multiple: true, initialLocationQuery: {
                filter: {
                    fields: {
                        'author': {
                            eq: ctx.item?.id
                        }
                    }
                }
            }
        })

        if (selectedRecords?.length) {
            await ctx.setFieldValue(ctx.fieldPath, selectedRecords.map(record => record.id))
        }
    }

    return (
        <Canvas ctx={ctx}>
            <Button type="button" onClick={chooseFilteredItem} buttonSize="s">
                Filter
            </Button>
        </Canvas>
    );
};