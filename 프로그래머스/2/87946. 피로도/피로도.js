function solution(k, dungeons) {
  var answer = -1;
  const visited = Array(dungeons).fill(false);
  dfs(k, visited, dungeons, 0)
    
    function dfs(k, visited, dungeons, count){
        answer = Math.max(count, answer);
        for (let i=0; i < dungeons.length; i++){
            if(k >= dungeons[i][0] && !visited[i]){
                visited[i] = true;
                dfs(k-dungeons[i][1], visited, dungeons, count + 1)
                visited[i] = false;
            }
        }
    }
 
  return answer;
}
