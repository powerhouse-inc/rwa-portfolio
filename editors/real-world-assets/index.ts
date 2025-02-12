import { RWAEditorContextProps } from "@powerhousedao/design-system";
import type {
  RealWorldAssetsState,
  RealWorldAssetsLocalState,
  RealWorldAssetsAction,
} from "../../document-models/real-world-assets";
import { ExtendedEditor } from "document-model-libs";
import Component from "./editor";
export const module: ExtendedEditor<
  RealWorldAssetsState,
  RealWorldAssetsAction,
  RealWorldAssetsLocalState,
  RWAEditorContextProps
> = {
  Component,
  documentTypes: ["makerdao/rwa-portfolio"],
  config: {
    id: "rwa-editor",
    disableExternalControls: true,
  },
};

export default module;
