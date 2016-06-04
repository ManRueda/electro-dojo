for lessfile in $(find app/styles -name "*.less"); do
  cssfile=$(echo $lessfile | sed 's/\.less$/.css/')
  echo "Compiling $lessfile to $cssfile"
  rm -f $cssfile
  lessc $lessfile $cssfile -x --source-map-map-inline
done;
