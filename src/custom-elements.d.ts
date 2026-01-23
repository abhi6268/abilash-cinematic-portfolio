declare namespace JSX {
    interface IntrinsicElements {
        netflixintro: React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & {
            letter?: string;
        };
    }
}
