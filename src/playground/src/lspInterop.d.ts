import { editor, languages } from 'monaco-editor/esm/vs/editor/editor.api';
export declare function initializeInterop(self: any): Promise<boolean>;
export declare function getSemanticTokensLegend(): languages.SemanticTokensLegend;
export declare function getSemanticTokens(content: string): languages.SemanticTokens;
export declare function compileAndEmitDiagnostics(content: string): {
    template: string;
    diagnostics: editor.IMarkerData[];
};
export declare function decompile(jsonContent: string): string;
//# sourceMappingURL=lspInterop.d.ts.map