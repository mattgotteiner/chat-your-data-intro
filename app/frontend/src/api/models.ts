export const enum RetrievalMode {
    Hybrid = "hybrid",
    Vectors = "vectors",
    Text = "text"
}

export type ChatAppRequestOverrides = {
    retrieval_mode?: RetrievalMode;
    semantic_ranker?: boolean;
    semantic_captions?: boolean;
    exclude_category?: string;
    top?: number;
    temperature?: number;
};

export type ResponseMessage = {
    content: string;
    role: string;
};

export type ResponseContext = {
    thoughts: string | null;
    data_points: string[];
    followup_questions: string[] | null;
    tutorial_id?: number;
    tutorial_image?: string;
};

export type ResponseChoice = {
    index: number;
    message: ResponseMessage;
    context: ResponseContext;
    session_state: any;
};

export type ChatAppResponseOrError = {
    choices?: ResponseChoice[];
    error?: string;
};

export type ChatAppResponse = {
    choices: ResponseChoice[];
};

export type ChatAppRequestContext = {
    tutorial_id?: number
    overrides?: ChatAppRequestOverrides;
};

export type ChatAppRequest = {
    messages: ResponseMessage[];
    context?: ChatAppRequestContext;
    stream?: boolean;
    session_state: any;
};
