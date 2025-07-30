# Optimizing Git Performance

Resource type: Article

https://blog.pixelfreestudio.com/how-to-optimize-git-performance-in-large-repositories/

How to Optimize Git Performance in Large Repositories

- Use Git LFS - Offload large binary files (e.g. images, audio, video) to Git LFS to keep the repo lightweight.
- Shallow & Partial Clones - Use `--depth` for shallow clones and `--filter` for partial clones to reduce download and processing time.
- Sparse Checkout - Only check out necessary parts of the repo to minimize local file load.
- Clean Up Branches - Regularly delete stale local and remote branches to reduce metadata bloat.
- Tune Git Internals - Enable features like commit-graph, filesystem monitor, and prefetching for faster status and log.
- Standardize Team Practices - Train teams on efficient Git usage and enforce consistent naming and branching strategies.

These techniques reduce clone size, speed up Git commands, and keep large repos manageable.
