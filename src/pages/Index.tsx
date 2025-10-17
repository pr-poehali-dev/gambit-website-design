import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c1d] via-[#1a1535] to-[#0f0c1d] text-foreground overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Yjg3ZjUiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/24bac904-8479-439b-baab-c9d59ec195d2/files/167c9b69-cd0a-4e42-a259-9afc6d9d6b19.jpg" 
                alt="Gambit Logo" 
                className="w-12 h-12 neon-pulse rounded-lg"
              />
              <span className="text-3xl font-bold neon-glow">GAMBIT</span>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-all hover:neon-border"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/10 hover:bg-secondary/20 transition-all hover:neon-border"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-accent/10 hover:bg-accent/20 transition-all hover:neon-border"
              >
                <Icon name="Send" size={20} />
              </a>
            </div>
          </nav>
        </header>

        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-7xl md:text-9xl font-bold neon-glow mb-6 animate-fade-in">
              GAMBIT
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold tracking-wide mb-4">
              THE MEMECOIN THAT PLAYS TO WIN
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              In the crypto game, you either go all in or watch from the sidelines. 
              Gambit isn't just a coin — it's a calculated risk with unlimited upside.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 neon-border hover:scale-105 transition-transform"
              >
                <Icon name="TrendingUp" size={24} className="mr-2" />
                BUY GAMBIT
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary text-lg px-8 py-6 hover:bg-primary/10 hover:neon-border transition-all"
              >
                <Icon name="FileText" size={24} className="mr-2" />
                WHITEPAPER
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 neon-glow">
            WHY GAMBIT?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-8 hover:neon-border transition-all hover:scale-105">
              <div className="mb-4">
                <Icon name="Zap" size={48} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">FAST MOVES</h3>
              <p className="text-muted-foreground">
                Lightning-fast transactions on the blockchain. No delays, no hesitation. 
                When opportunity knocks, Gambit answers instantly.
              </p>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/30 p-8 hover:neon-border transition-all hover:scale-105">
              <div className="mb-4">
                <Icon name="TrendingUp" size={48} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary">EXPLOSIVE GROWTH</h3>
              <p className="text-muted-foreground">
                Early investors understand: the best gains come from calculated risks. 
                Gambit's tokenomics are designed for exponential returns.
              </p>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 p-8 hover:neon-border transition-all hover:scale-105">
              <div className="mb-4">
                <Icon name="Users" size={48} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-accent">COMMUNITY POWER</h3>
              <p className="text-muted-foreground">
                We're not just holders — we're players. A united community that moves together, 
                wins together. Join the strongest hands in crypto.
              </p>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/30 neon-border">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 neon-glow">
              THE GAMBIT EDGE
            </h2>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={28} className="text-primary flex-shrink-0 mt-1" />
                <p>
                  <strong className="text-primary">Deflationary Mechanics:</strong> Limited supply means your bag grows in value as circulation decreases. Scarcity drives demand.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={28} className="text-secondary flex-shrink-0 mt-1" />
                <p>
                  <strong className="text-secondary">Viral Marketing:</strong> Gambit isn't just a coin — it's a movement. Our community-driven campaigns reach millions organically.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={28} className="text-accent flex-shrink-0 mt-1" />
                <p>
                  <strong className="text-accent">Strategic Partnerships:</strong> We're building connections with top-tier exchanges and influencers. Liquidity and exposure are locked in.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="CheckCircle2" size={28} className="text-primary flex-shrink-0 mt-1" />
                <p>
                  <strong className="text-primary">Early Entry Advantage:</strong> You're here before the moon mission launches. First-movers capture the biggest gains — that's you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 neon-glow">
            TOKENOMICS
          </h2>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-primary/20 to-card/50 backdrop-blur-sm border-primary/30 p-8">
              <h3 className="text-3xl font-bold mb-6 text-primary">SUPPLY</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center border-b border-primary/20 pb-3">
                  <span className="text-muted-foreground">Total Supply:</span>
                  <span className="font-bold">1,000,000,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/20 pb-3">
                  <span className="text-muted-foreground">Circulating:</span>
                  <span className="font-bold text-secondary">850,000,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/20 pb-3">
                  <span className="text-muted-foreground">Burned:</span>
                  <span className="font-bold text-accent">50,000,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Locked Liquidity:</span>
                  <span className="font-bold text-primary">100,000,000</span>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/20 to-card/50 backdrop-blur-sm border-secondary/30 p-8">
              <h3 className="text-3xl font-bold mb-6 text-secondary">DISTRIBUTION</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Community (85%)</span>
                    <span className="font-bold">850M</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Liquidity Pool (10%)</span>
                    <span className="font-bold">100M</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Burned (5%)</span>
                    <span className="font-bold">50M</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-accent h-3 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-12 text-center">
            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 p-8">
              <Icon name="Shield" size={48} className="text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-accent">ANTI-WHALE PROTECTION</h3>
              <p className="text-muted-foreground text-lg">
                Maximum transaction limit: 2% of total supply. No single wallet can dump and crash the price. 
                Fair distribution ensures sustainable growth for all holders.
              </p>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 neon-glow">
            ROADMAP
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/30 p-8 hover:neon-border transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary">
                  <Icon name="Rocket" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-primary">PHASE 1: LAUNCH</h3>
                  <p className="text-muted-foreground mb-3">Q1 2024 - COMPLETED ✓</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Token deployment on blockchain
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Initial liquidity pool creation
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      Community building across social platforms
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-secondary/30 p-8 hover:neon-border transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center border-2 border-secondary">
                  <Icon name="TrendingUp" size={28} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-secondary">PHASE 2: GROWTH</h3>
                  <p className="text-muted-foreground mb-3">Q2 2024 - IN PROGRESS</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={18} className="text-secondary" />
                      Listings on major DEX platforms
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Loader2" size={18} className="text-secondary animate-spin" />
                      Partnerships with crypto influencers
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Loader2" size={18} className="text-secondary animate-spin" />
                      First major marketing campaign
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-accent/30 p-8 hover:neon-border transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center border-2 border-accent">
                  <Icon name="Globe" size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-accent">PHASE 3: EXPANSION</h3>
                  <p className="text-muted-foreground mb-3">Q3-Q4 2024</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Circle" size={18} className="text-accent" />
                      Centralized exchange listings (CEX)
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Circle" size={18} className="text-accent" />
                      NFT collection launch for holders
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Circle" size={18} className="text-accent" />
                      Strategic burn events
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border-primary/30 p-8 hover:neon-border transition-all">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center border-2 border-primary">
                  <Icon name="Crown" size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 neon-glow">PHASE 4: DOMINATION</h3>
                  <p className="text-muted-foreground mb-3">2025 & BEYOND</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Circle" size={18} className="text-primary" />
                      Gambit Wallet & DeFi ecosystem
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Circle" size={18} className="text-primary" />
                      Metaverse integration & gaming
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Circle" size={18} className="text-primary" />
                      Top 100 crypto by market cap
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold neon-glow mb-6">
              MAKE YOUR MOVE
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              The house always wins — unless you're playing Gambit. 
              Fortune favors the bold. Don't watch from the sidelines.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-secondary via-primary to-accent text-xl px-12 py-8 neon-border hover:scale-110 transition-transform font-bold"
            >
              <Icon name="Rocket" size={28} className="mr-3" />
              JOIN THE GAMBIT REVOLUTION
            </Button>
            <div className="flex flex-wrap gap-8 justify-center pt-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors hover:neon-glow">
                Contract Address
              </a>
              <a href="#" className="hover:text-primary transition-colors hover:neon-glow">
                Liquidity Locked
              </a>
              <a href="#" className="hover:text-primary transition-colors hover:neon-glow">
                Audit Report
              </a>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 GAMBIT. All rights reserved. Not financial advice.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:neon-glow"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors hover:neon-glow"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors hover:neon-glow"
              >
                <Icon name="Send" size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;