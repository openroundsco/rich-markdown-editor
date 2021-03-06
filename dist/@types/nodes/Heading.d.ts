import { Plugin } from "prosemirror-state";
import { Node as ProsemirrorNode, NodeType } from "prosemirror-model";
import { MarkdownSerializerState } from "prosemirror-markdown";
import Node from "./Node";
export default class Heading extends Node {
    get name(): string;
    get defaultOptions(): {
        levels: number[];
    };
    get schema(): {
        attrs: {
            level: {
                default: number;
            };
        };
        content: string;
        group: string;
        defining: boolean;
        draggable: boolean;
        parseDOM: any;
        toDOM: (node: any) => (string | (string | number)[] | HTMLButtonElement)[];
    };
    toMarkdown(state: MarkdownSerializerState, node: ProsemirrorNode): void;
    parseMarkdown(): {
        block: string;
        getAttrs: (token: Record<string, any>) => {
            level: number;
        };
    };
    commands({ type, schema }: {
        type: any;
        schema: any;
    }): (attrs: Record<string, any>) => (state: any, dispatch: any) => boolean;
    handleCopyLink: () => (event: any) => void;
    keys({ type }: {
        type: NodeType;
    }): any;
    get plugins(): Plugin<any, any>[];
    inputRules({ type }: {
        type: NodeType;
    }): any;
}
//# sourceMappingURL=Heading.d.ts.map