import { SassFormatter, SassTextDocument } from 'sass-formatter';

export function formatSass(rawStr: string, tabSize: number = 2): string {
    return SassFormatter.Format(
        new SassTextDocument(rawStr),
        {
            insertSpaces: true,
            tabSize,
        }
    );
}
