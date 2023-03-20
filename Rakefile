task :default => :test

task :t => :test
desc "[t] test"
task :test do
  system "sh", "-vec", <<~EOT, exception: true
    jest
  EOT
end

task :b => :build
desc "[b] build"
task :build do
  system "sh", "-vec", <<~EOT, exception: true
    babel src -d lib --source-maps --no-comments
    exa -lh lib
  EOT
end

task :r => :release
desc "release"
task :release do
  system "sh", "-vec", <<~EOT, exception: true
    jest
    rake build
    git add -A
    git commit -m '[chore] npm run build' --allow-empty
    npm version patch
    git push --tags
    npm publish
    (cd ~/src/shogi-extend/nuxt_side && npx ncu beetleshine -u && npm i)
    (cd ~/src/shogi-player           && npx ncu beetleshine -u && npm i)
  EOT
end
