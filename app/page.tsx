import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Zap, Copy, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Video className="h-8 w-8 text-pink-500" />
            <h1 className="text-2xl font-bold text-gray-900">TikTok台本ジェネレーター</h1>
          </div>
          <p className="text-gray-600 text-sm">バズる縦動画の台本を10秒で自動生成</p>
        </div>

        {/* Main Card */}
        <Card className="shadow-lg border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-gray-900">台本作成が面倒？</CardTitle>
            <CardDescription className="text-base">
              テーマを入力するだけで、プロ級の台本を瞬時に生成します
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-pink-500" />
                </div>
                <div>
                  <p className="font-medium text-sm">10秒で生成完了</p>
                  <p className="text-xs text-gray-500">AIが最適な構成を提案</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Copy className="h-4 w-4 text-purple-500" />
                </div>
                <div>
                  <p className="font-medium text-sm">ワンタップコピー</p>
                  <p className="text-xs text-gray-500">すぐに撮影に取りかかれる</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium text-sm">バズる構成</p>
                  <p className="text-xs text-gray-500">フック・本編・結論の黄金パターン</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/generate" className="block">
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium py-6 text-lg">
                台本を作成する
              </Button>
            </Link>

            <p className="text-xs text-gray-400 text-center">無料で利用できます</p>
          </CardContent>
        </Card>

        {/* Example */}
        <Card className="bg-gray-50 border-gray-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-gray-700">生成例</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-gray-600 space-y-1">
            <p>
              <strong>テーマ:</strong> 5kg痩せる朝習慣
            </p>
            <p>
              <strong>ターゲット:</strong> 20代女性
            </p>
            <p>
              <strong>想定尺:</strong> 30秒
            </p>
            <div className="mt-3 p-2 bg-white rounded text-xs">
              <p>
                <strong>【タイトル】</strong> 朝の5分で人生変わる痩せ習慣
              </p>
              <p>
                <strong>導入:</strong> 朝起きてすぐにやるだけで...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
