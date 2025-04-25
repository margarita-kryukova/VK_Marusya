"use client"

import React, { useState, useEffect } from "react";

interface UseDynamicSVGImportOptions {
    onCompleted?: (
        name: string,
        SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
    ) => void;
    onError?: (err: unknown) => void;
}

export const useDynamicSVGImport = (name: string, options: UseDynamicSVGImportOptions = {}) => {
    const [ImportedIcon, setImportedIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>();

    const { onCompleted, onError } = options;
    useEffect(() => {
        setLoading(true);
        const importIcon = async (): Promise<void> => {
            try {
                const icon = await import(`../../../public/icons/${name}.svg`);
                setImportedIcon(() => icon.default);
                onCompleted?.(name, icon.default);
            } catch (err) {
                onError?.(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name, onCompleted, onError]);

    return { error, loading, SvgIcon: ImportedIcon };
};
