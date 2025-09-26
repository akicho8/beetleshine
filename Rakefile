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
    eza -lh lib
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
    (cd ~/src/shogi-extend/nuxt_side && npx npm-check-updates beetleshine -u && npm  i)
    (cd ~/src/shogi-player           && npx npm-check-updates beetleshine -u && pnpm i)
  EOT
end
