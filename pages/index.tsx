import { Phone, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#e6f0e8]">
      <header className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#8B4513]">屋根・外壁のプロ</div>
          <nav className="space-x-4 hidden md:block">
            {['services', 'problems', 'process', 'contact'].map((id) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-[#2e8b57] hover:underline">
                {id === 'services' ? 'サービス' : 
                 id === 'problems' ? 'お悩み' : 
                 id === 'process' ? '施工の流れ' : 'お問い合わせ'}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-16">
        <section className="bg-[#e6f0e8] py-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold text-[#2e8b57] mb-4">暮らしの未来を守る</h1>
            <p className="text-xl mb-8">屋根・外壁の問題でお悩みですか？私たちにお任せください。</p>
            <Button className="bg-[#2e8b57] hover:bg-[#236b43]" onClick={() => scrollToSection('contact')}>
              <Phone className="mr-2 h-4 w-4" /> 今すぐ相談する
            </Button>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <ChevronDown size={40} className="text-[#2e8b57] animate-bounce" />
          </div>
          <TreeIllustration className="absolute bottom-0 left-0 w-1/4 h-auto" />
          <TreeIllustration className="absolute bottom-0 right-0 w-1/4 h-auto transform scale-x-[-1]" />
        </section>

        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-8">サービス内容</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['外壁張替・補修工事', '屋根葺き替え・補修工事', 'その他リフォーム工事'].map((service, index) => (
                <Card key={index} className="bg-[#e6f0e8]">
                  <CardHeader>
                    <CardTitle className="text-[#2e8b57]">{service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>プロの技術で、お客様の大切な住まいを守ります。</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="problems" className="py-16 bg-[#e6f0e8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-8">よくあるお悩み</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2e8b57]">雨漏りの心配</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>雨漏りは早期発見・早期対応が重要です。弊社の専門家が迅速に対応いたします。</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#2e8b57]">地震対策</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>重い瓦屋根が心配ですか？軽量で耐震性の高い最新の屋根材をご提案いたします。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="process" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-8">施工の流れ</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {['お問い合わせ', '現地調査', '提案・見積作成', '契約', '工事実施', 'アフターフォロー'].map((step, index) => (
                <div key={index} className="flex items-center bg-[#e6f0e8] p-4 rounded-lg">
                  <div className="bg-[#2e8b57] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">{index + 1}</div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-[#e6f0e8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#8B4513] mb-8">お問い合わせ</h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="お名前" />
              <Input type="email" placeholder="メールアドレス" />
              <Input placeholder="電話番号" />
              <Textarea placeholder="お問い合わせ内容" />
              <Button className="w-full bg-[#2e8b57] hover:bg-[#236b43]">送信する</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#8B4513] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 屋根・外壁のプロ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const TreeIllustration = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 C20 40, 30 60, 50 90 C70 60, 80 40, 50 10" fill="#2e8b57" />
    <rect x="45" y="90" width="10" height="10" fill="#8B4513" />
  </svg>
)
