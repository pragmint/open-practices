
def main [
    --verbose(-v)
    --count(-c): int 
] {
    print 'Removing old dist.'
    rm -rf dist
    print 'Generating html.'
    ls **/*
    | where type == file
    | get name
    | path parse
    | where extension == md
    | if $count > 0 { take $count }
    | each {
        let full_path = $in;
        let md_path = $'./($full_path | path join)';
        let html_path = $'./dist/($full_path | update extension html | path join)'
        if ($verbose) {
            print $'(ansi green)Converting(ansi reset): (ansi yellow)($md_path)(ansi reset) to (ansi purple)($html_path)(ansi reset)'
        }
        ^pandoc -f markdown -t html -s $'($md_path)' -o ($html_path)

        let content = ^htmlq --remove-nodes style -f $html_path;
        rm $html_path
        if ($verbose) {
            print $"Removing Styles from (ansi purple)($html_path)(ansi reset)"
        }
        $content | save $html_path

        prettier --print-width 200 --log-level silent  --write $html_path
        ^gsed -i '/<h1 /i <div class=\"header\">' $html_path
        ^gsed -i '/<\/h1>/a<\/div>' $html_path
        ^gsed -i '/title/a  <link rel=\"stylesheet\" href=\"/style.css\">' $html_path
        prettier --print-width 200 --log-level silent --write $html_path
    }
    | ignore
    
    print ""
    print "Converting all md links to html."
    cd dist
    ^rg '\.md' -l | xargs sed -i '' 's/\.md/\.html/g'
    cd ..
    
    print "Copying css file."
    cp ./scripts/resources/style.css ./dist/style.css

    print "Copying font file."
    cp ./scripts/resources/nunito.ttf ./dist/nunito.ttf

    print "Finished."
}
