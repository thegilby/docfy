import { Node } from 'unist';
import { Processor, Plugin, Settings } from 'unified';

export interface Heading {
  title: string;
  id: string;
  depth: number;
  headings?: Heading[];
}

export interface Page {
  source: string;
  ast: Node;
  markdown: string;
  rendered: string;
  metadata: {
    title?: string;
    order?: number;
    package?: string;
    category?: string;
    url?: string;
    headings?: Heading[];
  };
  demos?: Page[];
}

export interface Context {
  root: string;
  remark: Processor;
  pages: Page[];
  settings: {
    tocMaxDepth: number;
  };
}

interface SourceSettings {
  pattern: string;
  urlPrefix?: string;
  urlSuffix?: string;
  ignore?: string[];
}

export interface Options {
  root: string;
  sources: SourceSettings[];
  remarkPlugins?: ([Plugin, Settings] | Plugin)[];
  tocMaxDepth?: number;
}
