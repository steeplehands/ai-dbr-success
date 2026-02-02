import { CheckCircle, Mail, Calendar, FileText } from 'lucide-react';
import { Footer } from './Footer';

export function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-16 min-h-screen">
        <div className="w-full max-w-2xl">
          {/* Success icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 leading-tight">
            You're All Set!
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Let's Get Your Campaign Running
            </span>
          </h1>

          {/* Next Steps Card */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl mb-10">
            <h2 className="text-xl font-semibold text-white mb-6">Next Steps:</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Mail className="w-5 h-5 text-orange-500" />
                    <span className="font-medium text-white">Check your email for campaign setup details</span>
                  </div>
                  <p className="text-gray-400 text-sm">We've sent you everything you need to get started.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span className="font-medium text-white">Book your strategy call below (15 mins)</span>
                  </div>
                  <p className="text-gray-400 text-sm">Pick a time that works for you to discuss your campaign.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <FileText className="w-5 h-5 text-orange-500" />
                    <span className="font-medium text-white">Send us your lead list (CSV format)</span>
                  </div>
                  <p className="text-gray-400 text-sm">We'll review it and prepare your AI messaging campaign.</p>
                </div>
              </div>
            </div>

            {/* Subtext */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className="text-gray-300 text-center">
                We'll have your first 100 messages ready to send within <span className="text-orange-400 font-semibold">48 hours</span> of our call.
              </p>
            </div>
          </div>

          {/* Calendly Embed Section */}
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">Book Your Strategy Call</h2>

            {/*
              TODO: Insert Calendly embed here
              Replace this placeholder with your Calendly inline embed code
              Example:
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/your-link/15min"
                style={{ minWidth: '320px', height: '630px' }}
              ></div>

              Don't forget to uncomment the Calendly script in index.html:
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            */}
            <div className="bg-gray-900/50 border border-dashed border-gray-600 rounded-xl p-12 text-center">
              <Calendar className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">[Calendly embed goes here]</p>
              <p className="text-gray-500 text-sm mt-2">Replace this placeholder with your Calendly inline widget</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
