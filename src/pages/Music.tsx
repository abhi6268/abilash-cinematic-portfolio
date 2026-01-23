import React, { useMemo, useState } from "react";
import "./Music.css";

import albumCover1 from "../images/Hotelcalifornia.jpg";
import albumCover2 from "../images/ac-dc.jpg";
import albumCover3 from "../images/guns-n-roses.webp";
import albumCover4 from "../images/livingonaprayer.jpg";
import albumCover5 from "../images/dream-on.jpg";
import albumCover6 from "../images/Bohemian-rapsody.jpg";
import albumCover7 from "../images/stairway-to-heaven.jpg";
import albumCover8 from "../images/Smoke_on_the_Water_cover.jpg";
import albumCover9 from "../images/doiwannaknowu.jpeg";
import albumCover10 from "../images/RedHotChiliPeppersCalifornication.jpg";
import albumCover11 from "../images/Boulevard.jpeg";
import albumCover12 from "../images/Brightside.png";
import albumCover13 from "../images/sevenNA.webp";
import albumCover14 from "../images/Everlong.jpeg";
import albumCover15 from "../images/Uprising.jpg";
import albumCover16 from "../images/firestorm.jpeg";
import albumCover17 from "../images/arerey-manasa.jpg";
import albumCover18 from "../images/dhurandhar.jpeg";
import albumCover19 from "../images/monica.jpeg";
import albumCover20 from "../images/Tujhe_Kitna_Chahne_Lage_song.jpg";

type Mode = "classic" | "modern" | "mix";

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

const hashToUnit = (str: string) => {
    // FNV-ish hash -> 0..1
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return (h >>> 0) / 4294967295;
};

const seededProgress = (key: string) => {
    const u = hashToUnit(key);
    const shaped = Math.pow(u, 0.55);
    return clamp01(0.08 + shaped * 0.86);
};

type Track = {
    title: string;
    artist: string;
    cover?: string;
    youtubeUrl?: string;
    genres?: string[];
};

type Album = {
    title: string;
    artist: string;
    imgSrc: string;
};

type MusicConfig = {
    headerTitle: string;
    quote: string;
    genres: string[];
    tracks: Track[];
    albums: Album[];
};

const CONFIGS: Record<Mode, MusicConfig> = {
    classic: {
        headerTitle: "Classic Rock Mode",
        quote: "Rock and Roll isn’t a genre, it’s a way of life. 🎸",
        genres: ["Classic Rock", "Hard Rock", "Blues Rock", "Arena Rock", "Southern Rock"],
        tracks: [
            {
                title: "Bohemian Rhapsody",
                artist: "Queen",
                cover: albumCover6,
                youtubeUrl: "https://youtu.be/fJ9rUzIMcZQ?si=DgjN6qhD3HlHhoKC",
                genres: ["Classic Rock", "Arena Rock"],
            },
            {
                title: "Stairway to Heaven",
                artist: "Led Zeppelin",
                cover: albumCover7,
                youtubeUrl: "https://youtu.be/HQmmM_qwG4k?si=X-qi2QwOLgTqPAHD",
                genres: ["Classic Rock", "Blues Rock"],
            },
            {
                title: "Smoke on the Water",
                artist: "Deep Purple",
                cover: albumCover8,
                youtubeUrl: "https://youtu.be/Q2FzZSBD5LE?si=taBoT_0sYhnzOAlf",
                genres: ["Classic Rock", "Hard Rock"],
            },
            {
                title: "Livin' On A Prayer",
                artist: "Bon Jovi",
                cover: albumCover4,
                youtubeUrl: "https://youtu.be/lDK9QqIzhwk?si=GqgUDq6FFxwkEMNP",
                genres: ["Arena Rock", "Classic Rock"],
            },
            {
                title: "Dream On",
                artist: "Aerosmith",
                cover: albumCover5,
                youtubeUrl: "https://youtu.be/iJDtukGW79Y?si=vCwZSLPuv5xH1rUQ",
                genres: ["Classic Rock", "Hard Rock"],
            },
            {
                title: "Hotel California",
                artist: "Eagles",
                cover: albumCover1,
                youtubeUrl: "https://youtu.be/09839DpTctU?si=pXk8C_awlG9AZOnF",
                genres: ["Classic Rock", "Southern Rock"],
            },
            {
                title: "Back In Black",
                artist: "AC/DC",
                cover: albumCover2,
                youtubeUrl: "https://youtu.be/pAgnJDJN4VA?si=aSmAnbDZgmAqA42d",
                genres: ["Hard Rock", "Classic Rock"],
            },
            {
                title: "Sweet Child O' Mine",
                artist: "Guns N' Roses",
                cover: albumCover3,
                youtubeUrl: "https://youtu.be/1w7OgIMMRc4?si=j-n2IIntrJTZGAyX",
                genres: ["Hard Rock", "Arena Rock"],
            },
        ],
        albums: [
            { title: "Bohemian Rhapsody", artist: "Queen", imgSrc: albumCover6 },
            { title: "Livin' On A Prayer", artist: "Bon Jovi", imgSrc: albumCover4 },
            { title: "Smoke on the Water", artist: "Deep Purple", imgSrc: albumCover8 },
        ],
    },

    modern: {
        headerTitle: "Rock + Modern Mode",
        quote: "Modern edge, same energy. 🔥",
        genres: ["Alt Rock", "Indie Rock", "Modern Rock", "Garage Rock", "Pop Rock"],
        tracks: [
            {
                title: "Do I Wanna Know?",
                artist: "Arctic Monkeys",
                cover: albumCover9,
                youtubeUrl: "https://youtu.be/bpOSxM0rNPM?si=TS1NilRHtN1oQrIg",
                genres: ["Indie Rock", "Modern Rock"],
            },
            {
                title: "Californication",
                artist: "Red Hot Chili Peppers",
                cover: albumCover10,
                youtubeUrl: "https://youtu.be/YlUKcNNmywk?si=Efe5300EaSeUejBP",
                genres: ["Alt Rock", "Modern Rock"],
            },
            {
                title: "Boulevard of Broken Dreams",
                artist: "Green Day",
                cover: albumCover11,
                youtubeUrl: "https://youtu.be/Soa3gO7tL-c?si=RmnA-ue93_hKVgM1",
                genres: ["Pop Rock", "Modern Rock"],
            },
            {
                title: "Mr. Brightside",
                artist: "The Killers",
                cover: albumCover12,
                youtubeUrl: "https://youtu.be/gGdGFtwCNBE?si=xaOYnmLeORh82-il",
                genres: ["Indie Rock", "Pop Rock"],
            },
            {
                title: "Seven Nation Army",
                artist: "The White Stripes",
                cover: albumCover13,
                youtubeUrl: "https://youtu.be/0J2QdDbelmY?si=X9CGeDW6InD9P31R",
                genres: ["Garage Rock", "Indie Rock"],
            },
            {
                title: "Everlong",
                artist: "Foo Fighters",
                cover: albumCover14,
                youtubeUrl: "https://youtu.be/eBG7P-K-r1Y?si=c746DLtcTB0YjZLh",
                genres: ["Alt Rock", "Modern Rock"],
            },
            {
                title: "Uprising",
                artist: "Muse",
                cover: albumCover15,
                youtubeUrl: "https://youtu.be/w8KQmps-Sog?si=YR2svCT3mYYrnwDw",
                genres: ["Modern Rock", "Alt Rock"],
            },
        ],
        albums: [
            { title: "Your Favorites (Vol. 1)", artist: "Modern Rock Mix", imgSrc: albumCover10 },
            { title: "Indie Nights", artist: "Alt Rock Mix", imgSrc: albumCover13 },
            { title: "Stadium Anthems", artist: "Rock Mix", imgSrc: albumCover11 },
        ],
    },

    mix: {
        headerTitle: "Indian/Telugu + Rock Mix",
        quote: "Local vibe + guitar riffs. ⚡",
        genres: ["Telugu Hits", "Indian Rock", "Classic Rock", "Mass Beats", "Road Trip"],
        tracks: [
            {
                title: "Firestorm",
                artist: "Thaman S",
                cover: albumCover16,
                youtubeUrl: "https://youtu.be/FbXOsVByKmk?si=OM8QEubzuDaJpiGS",
                genres: ["Mass Beats", "Telugu Hits"],
            },
            {
                title: "Arerey Manasa",
                artist: "Sid Sriram",
                cover: albumCover17,
                youtubeUrl: "https://youtu.be/Qf4MumY9fXk?si=BfkDdBizHQcaO3gX",
                genres: ["Telugu Hits", "Road Trip"],
            },
            {
                title: "Dhurandhar",
                artist: "Hanumankind",
                cover: albumCover18,
                youtubeUrl: "https://youtu.be/1a5nyrMtRsk?si=rEBBnpmTGbxuUxmB",
                genres: ["Indian Rock", "Road Trip"],
            },
            {
                title: "Monica",
                artist: "Anirudh Ravichander",
                cover: albumCover19,
                youtubeUrl: "https://youtu.be/neOasLBWoy0?si=-GLlx2YIRRgfHmL6",
                genres: ["Mass Beats", "Road Trip"],
            },
            {
                title: "Tujhe kitna Chahne Lage",
                artist: "Arijit singh",
                cover: albumCover20,
                youtubeUrl: "https://youtu.be/AgX2II9si7w?si=gmB9zRX6bkS8P8if",
                genres: ["Road Trip"],
            },
            {
                title: "Bohemian Rhapsody",
                artist: "Queen",
                cover: albumCover6,
                youtubeUrl: "https://youtu.be/fJ9rUzIMcZQ?si=DgjN6qhD3HlHhoKC",
                genres: ["Classic Rock"],
            },
            {
                title: "Californication",
                artist: "Red Hot Chili Peppers",
                cover: albumCover10,
                youtubeUrl: "https://youtu.be/YlUKcNNmywk?si=Efe5300EaSeUejBP",
                genres: ["Indian Rock", "Road Trip"],
            },
            {
                title: "Boulevard of Broken Dreams",
                artist: "Green Day",
                cover: albumCover11,
                youtubeUrl: "https://youtu.be/Soa3gO7tL-c?si=RmnA-ue93_hKVgM1",
                genres: ["Road Trip", "Indian Rock"],
            },
            {
                title: "Livin' On A Prayer",
                artist: "Bon Jovi",
                cover: albumCover4,
                youtubeUrl: "https://youtu.be/lDK9QqIzhwk?si=GqgUDq6FFxwkEMNP",
                genres: ["Classic Rock", "Road Trip"],
            },
        ],
        albums: [
            { title: "Desi Favorites", artist: "Mix", imgSrc: albumCover16 },
            { title: "Rock Essentials", artist: "Mix", imgSrc: albumCover6 },
            { title: "Road Trip Energy", artist: "Mix", imgSrc: albumCover18 },
        ],
    },
};

const Music: React.FC = () => {
    const [mode, setMode] = useState<Mode>("classic");
    const data = useMemo(() => CONFIGS[mode], [mode]);

    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

    const filteredTracks = useMemo(() => {
        if (!selectedGenre) return data.tracks;
        return data.tracks.filter((t) => (t.genres ?? []).includes(selectedGenre));
    }, [data.tracks, selectedGenre]);

    return (
        <div className="musicx-page">
            <div className="musicx-hero">
                <div className="musicx-hero-top">
                    <h1 className="musicx-title">Music</h1>

                    <div className="musicx-switch">
                        <button
                            className={`musicx-pill ${mode === "classic" ? "active" : ""}`}
                            onClick={() => {
                                setMode("classic");
                                setSelectedGenre(null);
                            }}
                            type="button"
                        >
                            1 Classic
                        </button>
                        <button
                            className={`musicx-pill ${mode === "modern" ? "active" : ""}`}
                            onClick={() => {
                                setMode("modern");
                                setSelectedGenre(null);
                            }}
                            type="button"
                        >
                            2 Modern
                        </button>
                        <button
                            className={`musicx-pill ${mode === "mix" ? "active" : ""}`}
                            onClick={() => {
                                setMode("mix");
                                setSelectedGenre(null);
                            }}
                            type="button"
                        >
                            3 Mix
                        </button>
                    </div>
                </div>

                <p className="musicx-subtitle">{data.headerTitle}</p>
                <p className="musicx-quote">{data.quote}</p>
            </div>

            <Section title="Explore by Genre">
                <Row>
                    <GenreChip label="All" active={!selectedGenre} onClick={() => setSelectedGenre(null)} />
                    {data.genres.map((g, idx) => (
                        <GenreChip
                            key={`${g}-${idx}`}
                            label={g}
                            active={selectedGenre === g}
                            onClick={() => setSelectedGenre((prev) => (prev === g ? null : g))}
                        />
                    ))}
                </Row>
            </Section>

            <Section title="Top Tracks">
                {selectedGenre && (
                    <div className="musicx-filter">
                        Filtered by <span className="musicx-filterTag">{selectedGenre}</span>
                        <button className="musicx-filterClear" type="button" onClick={() => setSelectedGenre(null)}>
                            ✕
                        </button>
                    </div>
                )}

                <Row>
                    {filteredTracks.map((t, idx) => (
                        <Tile
                            key={`${t.title}-${idx}`}
                            title={t.title}
                            subtitle={t.artist}
                            bg={t.cover}
                            progress={seededProgress(`${mode}:${t.title}:${t.artist}`)}
                            youtubeUrl={t.youtubeUrl}
                        />
                    ))}
                </Row>
            </Section>


            <Section title="Albums">
                <Row>
                    {data.albums.map((a, idx) => (
                        <Poster key={`${a.title}-${idx}`} title={a.title} subtitle={a.artist} img={a.imgSrc} />
                    ))}
                </Row>
            </Section>

        </div>
    );
};

export default Music;

/* ---------- UI bits (kept in same file for easy copy/paste) ---------- */

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section className="musicx-section">
        <h2 className="musicx-h2">{title}</h2>
        {children}
    </section>
);

const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="musicx-row">{children}</div>;

const Tile: React.FC<{
    title: string;
    subtitle: string;
    bg?: string;
    progress: number;
    youtubeUrl?: string;
}> = ({ title, subtitle, bg, progress, youtubeUrl }) => {
    const openYouTube = () => {
        const url = youtubeUrl ?? `https://www.youtube.com/results?search_query=${encodeURIComponent(`${title} ${subtitle}`)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div
            className="musicx-tile"
            style={bg ? { backgroundImage: `url(${bg})` } : undefined}
            onClick={openYouTube}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter") openYouTube();
            }}
        >
            <div className="musicx-tileShade" />

            <button
                type="button"
                className="musicx-playBtn"
                aria-label={`Play ${title} on YouTube`}
                onClick={(e) => {
                    e.stopPropagation();
                    openYouTube();
                }}
            >
                ▶
            </button>

            <div className="musicx-tileMeta">
                <div className="musicx-tileTitle">{title}</div>
                <div className="musicx-tileSub">{subtitle}</div>
            </div>

            <div className="musicx-progress">
                <div className="musicx-progressFill" style={{ width: `${Math.round(clamp01(progress) * 100)}%` }} />
            </div>
        </div>
    );
};

const Poster: React.FC<{ title: string; subtitle: string; img: string }> = ({ title, subtitle, img }) => (
    <div className="musicx-poster">
        <img className="musicx-posterImg" src={img} alt={title} />
        <div className="musicx-posterShade" />
        <div className="musicx-posterMeta">
            <div className="musicx-posterTitle">{title}</div>
            <div className="musicx-posterSub">{subtitle}</div>
        </div>
    </div>
);

const GenreChip: React.FC<{ label: string; active?: boolean; onClick?: () => void }> = ({ label, active, onClick }) => (
    <button type="button" className={`musicx-genre ${active ? "active" : ""}`} onClick={onClick}>
        {label}
    </button>
);